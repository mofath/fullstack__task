import nodemailer from 'nodemailer';
import config from '../../config';
import logger from '../logger';

export default () => {
  let mailer: any = {};

  function createSMTPClient() {
    const client = nodemailer.createTransport({
      host: config.MAILER.HOST,
      port: config.MAILER.PORT,
      service: 'Gmail',
      secure: false,
      auth: {
        user: config.MAILER.USER,
        pass: config.MAILER.PASS,
      },
    });

    logger.info('mailer set up for SMTP');

    return client;
  }

  function initialize() {
    try {
      mailer = createSMTPClient();
    } catch (error) {
      logger.error(error);
    }
  }

  async function send({
    to,
    subject,
    text,
    html,
  }: {
    to: string;
    subject: string;
    text?: string;
    html: string;
  }) {
    const mailOptions = {
      from: config.MAILER.FROM,
      to: to,
      subject: subject,
      text: text,
      html: html,
    };
    try {
      await mailer.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
          logger.error(
            'there was an error :-(, and it was this: ' + error.message
          );
        } else {
          logger.info('Message sent: ' + info.response);
        }
      });

      logger.info('Sent email successfully');
    } catch (error) {
      logger.error(error);
    }
  }

  initialize();

  return {
    sendEmail: send,
  };
};
