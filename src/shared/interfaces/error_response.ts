export interface ErrorResponse {
  detail: {
    titulo: string;
    detalle: string;
    status_code: number;
  };
}
