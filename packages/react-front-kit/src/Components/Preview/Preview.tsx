'use client';

import type { ReactElement } from 'react';

import { useEffect, useState } from 'react';

import classes from './Preview.module.css';

export interface IPreviewProps {
  defaultAspectRatio?: number;
  defaultHeight?: number;
  defaultMimeType?: string;
  defaultWidth?: number;
  url: string;
}

export function Preview(
  props: IPreviewProps &
    JSX.IntrinsicElements['audio' | 'iframe' | 'img' | 'video'],
): ReactElement {
  const {
    defaultAspectRatio,
    defaultHeight,
    defaultWidth,
    defaultMimeType,
    url,
    ...restProps
  } = props;
  const [type, setType] = useState(defaultMimeType);
  const [width, setWidth] = useState<number | undefined>(
    defaultWidth ??
      (defaultAspectRatio && defaultHeight
        ? defaultAspectRatio / defaultHeight
        : undefined),
  );
  const [height, setHeight] = useState<number | undefined>(
    defaultHeight ??
      (defaultAspectRatio && defaultWidth
        ? defaultAspectRatio * defaultWidth
        : undefined),
  );

  const mimeType = defaultMimeType ?? type;
  const isImage = mimeType?.includes('image/');
  const isVideo = mimeType?.includes('video/');
  const isAudio = mimeType?.includes('audio/');
  const isOther = mimeType && !isImage && !isVideo && !isAudio;

  useEffect(() => {
    if (!defaultMimeType && url) {
      fetch(url)
        .then((r) => r.blob())
        .then((blob) => setType(blob.type))
        .catch((error) => console.error(error));
    }
  }, [defaultMimeType, url]);

  useEffect(() => {
    if (!defaultAspectRatio && isImage && url) {
      const img = new Image();
      img.onload = () => {
        setWidth(img.width);
        setHeight(img.height);
      };
      img.src = url;
    }
  }, [defaultAspectRatio, isImage, url]);

  return (
    <div className={classes.root}>
      {Boolean(isImage && width && height) && (
        <img
          alt=""
          className={classes.image}
          height={height}
          src={url}
          width={width}
          {...(restProps as JSX.IntrinsicElements['img'])}
        />
      )}
      {Boolean(isVideo) && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          className={classes.video}
          controls
          src={url}
          style={{ aspectRatio: defaultAspectRatio }}
          {...(restProps as JSX.IntrinsicElements['video'])}
        />
      )}
      {Boolean(isAudio) && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio
          className={classes.audio}
          controls
          src={url}
          {...(restProps as JSX.IntrinsicElements['audio'])}
        />
      )}
      {Boolean(isOther) && (
        // eslint-disable-next-line react/iframe-missing-sandbox
        <iframe
          className={classes.iframe}
          src={url}
          style={{ aspectRatio: defaultAspectRatio ?? '3/4' }}
          title="Preview"
          {...(restProps as JSX.IntrinsicElements['iframe'])}
        />
      )}
    </div>
  );
}
