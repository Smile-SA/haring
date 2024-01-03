'use client';

import type { ReactElement } from 'react';

import { createStyles } from '@mantine/styles';
import { useEffect, useState } from 'react';

const useStyles = createStyles((theme) => ({
  audio: {
    maxWidth: '100%',
  },
  iframe: {
    background: theme.white,
    boxShadow:
      '0px 3.4348926544189453px 2.7479140758514404px 0px rgba(0, 0, 0, 0.0155),' +
      '0px 8.687101364135742px 6.949680805206299px 0px rgba(0, 0, 0, 0.0222),' +
      '0px 17.720870971679688px 14.176697731018066px 0px rgba(0, 0, 0, 0.0278),' +
      '0px 36.501644134521484px 29.201316833496094px 0px rgba(0, 0, 0, 0.0345),' +
      '0px 100px 80px 0px rgba(0, 0, 0, 0.05)',
    width: '100%',
  },
  image: {
    maxWidth: '100%',
  },
  root: {
    textAlign: 'center',
    width: '100%',
  },
  video: {
    maxWidth: '100%',
  },
}));

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
  const { classes } = useStyles();

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
