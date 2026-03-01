declare module "nodemailer" {
  interface TransportOptions {
    service?: string;
    auth?: { user: string; pass: string };
    tls?: { rejectUnauthorized?: boolean };
  }

  interface SendMailOptions {
    from?: string;
    to: string;
    replyTo?: string;
    subject: string;
    text?: string;
    html?: string;
  }

  function createTransport(options?: TransportOptions): {
    sendMail(options: SendMailOptions): Promise<unknown>;
  };

  export = createTransport;
}
