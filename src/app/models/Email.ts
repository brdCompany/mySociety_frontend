export interface Email {
  sender: string;
  recipients: string[];
  subject: string;
  body: string;
  files: File[];
}
