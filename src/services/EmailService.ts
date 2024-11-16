export class EmailService {
  static sendEmail(name: string, email: string): boolean {
    try {
      const emailBody = `
Sehr geehrtes digitalto-Team,

ich interessiere mich für eine KI-Wertanalyse für mein Unternehmen.

Meine Kontaktdaten:
Name: ${name}
E-Mail: ${email}

Ich freue mich auf Ihre Rückmeldung.

Mit freundlichen Grüßen
${name}`.trim();

      const mailtoLink = encodeURI(`mailto:info@digitalto.de?subject=KI-Wertanalyse Anfrage&body=${emailBody}`);
      
      // Create and click a temporary link element
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_self'; // Open in same window
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}