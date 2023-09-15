using Microsoft.AspNetCore.Identity.UI.Services;

namespace MvcMovie.Services
{
    public class EmailSender : IEmailSender
    {
        public EmailSender()
        {
        }

        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            Console.WriteLine();
            Console.WriteLine("Email Confirmation Message");
            Console.WriteLine("--------------------------");
            Console.WriteLine($"To: {email}");
            Console.WriteLine($"Subject: {subject}");
            Console.WriteLine($"Message: {htmlMessage}");
            Console.WriteLine();

            return Task.CompletedTask;
        }
    }
}
