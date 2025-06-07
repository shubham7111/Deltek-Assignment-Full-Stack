using Contacts.API.Models;
using System;
using System.Linq;

namespace Contacts.API.Data
{
    public class DbInitializer
    {
        public static void Seed(AppDbContext context)
        {
            // If data already exists, skip seeding
            if (context.Contacts.Any()) return;

            context.Contacts.AddRange(
                new Contact
                {

                    FullName = "John Doe",
                    Email = "john@example.com",
                    PhoneNumber = "1234567890",
                    Address = "Bhayander"
                },
                new Contact
                {

                    FullName = "Jane Smith",
                    Email = "jane@example.com",
                    PhoneNumber = "0987654321",
                    Address = "Mira road"
                }
            );

            context.SaveChanges();
        }
    }
}
