export type DownloadStatus = "Ready" | "Processing" | "Failed";

export interface DownloadItem {
    id: number;
    name: string;
    status: DownloadStatus;
}