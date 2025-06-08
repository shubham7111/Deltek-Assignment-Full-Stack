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
                    Address = "Andheri East, Mumbai"
                },
                new Contact
                {

                    FullName = "Jane Smith",
                    Email = "jane@example.com",
                    PhoneNumber = "0987654321",
                    Address = "Baner, Pune"
                },
                new Contact
                {

                    FullName = "Amit Patel",
                    Email = "amit.patel@example.com",
                    PhoneNumber = "9988776655",
                    Address = "Mira Road, Mumbai"
                },
                new Contact
                {

                    FullName = "Jane Smith",
                    Email = "jane@example.com",
                    PhoneNumber = "0987654321",
                    Address = "Mira road"
                },
                new Contact
                {
                    FullName = "Priya Sharma",
                    Email = "priya.sharma@example.com",
                    PhoneNumber = "9090909090",
                    Address = "Indiranagar, Bengaluru"
                },
                new Contact
                {
                    FullName = "Michael Scott",
                    Email = "michael.scott@dundermifflin.com",
                    PhoneNumber = "8888888888",
                    Address = "Scranton, Pennsylvania"
                },
                new Contact
                {
                    FullName = "Dwight Schrute",
                    Email = "dwight.schrute@dundermifflin.com",
                    PhoneNumber = "7777777777",
                    Address = "Schrute Farms, Pennsylvania"
                },
                new Contact
                {
                    FullName = "Jim Halpert",
                    Email = "jim.halpert@dundermifflin.com",
                    PhoneNumber = "6666666666",
                    Address = "Scranton, Pennsylvania"
                },
                new Contact
                {
                    FullName = "Pam Beesly",
                    Email = "pam.beesly@dundermifflin.com",
                    PhoneNumber = "5555555555",
                    Address = "Scranton, Pennsylvania"
                },
                new Contact
                {
                    FullName = "Ravi Verma",
                    Email = "ravi.verma@example.com",
                    PhoneNumber = "9445566778",
                    Address = "Powai, Mumbai"
                },
                new Contact
                {
                    FullName = "Sneha Kulkarni",
                    Email = "sneha.kulkarni@example.com",
                    PhoneNumber = "9332211445",
                    Address = "Kothrud, Pune"
                }
                
            );

            context.SaveChanges();
        }
    }
}
