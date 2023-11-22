import type { IAction, IConfirmAction } from "@smile/react-front-kit-shared";
import type { MRT_Row } from "mantine-react-table";

export type ITableAction<Data extends Record<string, unknown>> = IAction<
  MRT_Row<Data> | MRT_Row<Data>[]
>;

export type ITableConfirmAction<Data extends Record<string, unknown>> = IConfirmAction<
  MRT_Row<Data> | MRT_Row<Data>[]
>;
