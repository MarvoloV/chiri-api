import { Resend } from 'resend';

export async function sendEmail(email: string, url: string) {
  const resend = new Resend(process.env.RESENT_API_KEY);
  try {
    await resend.emails.send({
      from: 'Info <info@twofacedev.tech>',
      to: [email],
      subject: 'Activar Cuenta Chiri',
      html: `

<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <title> </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      #outlook a {
        padding: 0;
      }

      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      p {
        display: block;
        margin: 13px 0;
      }
    </style>

    <style type="text/css">
      @media only screen and (min-width: 480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width: 480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }

        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
  </head>

  <body style="word-spacing: normal">
    <div style="">
      <div style="margin: 0px auto; max-width: 600px">
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="width: 100%"
        >
          <tbody>
            <tr>
              <td
                style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 20px 0;
                  text-align: center;
                "
              >
                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tbody>
                              <tr>
                                <td style="width: 100px">
                                  <img
                                    height="auto"
                                    src="https://chiri-online.s3.amazonaws.com/chiri-logo.png"
                                    style="
                                      border: 0;
                                      display: block;
                                      outline: none;
                                      text-decoration: none;
                                      height: auto;
                                      width: 100%;
                                      font-size: 13px;
                                    "
                                    width="100"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          "
                        >
                          <p
                            style="
                              border-top: solid 4px #93bfcf;
                              font-size: 1px;
                              margin: 0px auto;
                              width: 100%;
                            "
                          ></p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: arial;
                              font-size: 20px;
                              line-height: 1;
                              text-align: left;
                              color: #999999;
                            "
                          >
                            Bienvenido a Chiri, {fullname}. Por favor confirma
                            tu correo eléctronico haciendo click en el siguiente
                            botón:
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          vertical-align="middle"
                          style="
                            font-size: 0px;
                            padding: 10px 25px;
                            padding-top: 10px;
                            padding-bottom: 45px;
                            word-break: break-word;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="border-collapse: separate; line-height: 100%"
                          >
                            <tr>
                              <td
                                align="center"
                                bgcolor="#93BFCF"
                                role="presentation"
                                style="
                                  border: none;
                                  border-radius: 24px;
                                  cursor: auto;
                                  mso-padding-alt: 10px 25px;
                                  background: #93bfcf;
                                "
                                valign="middle"
                              >
                                <a
                                  href="https://www.chiri.online/activate/?token=${url}"
                                  style="
                                    display: inline-block;
                                    background: #93bfcf;
                                    color: #1d1d1b;
                                    font-family: Arial;
                                    font-size: 20px;
                                    font-weight: normal;
                                    line-height: 120%;
                                    margin: 0;
                                    text-decoration: none;
                                    text-transform: none;
                                    padding: 10px 25px;
                                    mso-padding-alt: 0px;
                                    border-radius: 24px;
                                  "
                                  target="_blank"
                                >
                                  Confirmar Correo
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</html>
`,
    });
  } catch (error) {
    console.log(
      '🚀 ~ file: sendEmail.ts:16 ~ enviarCorreoPersonalizado ~ error:',
      error,
    );
  }
}
