using System;

namespace CandyMarket.Api.DataModels
{
    public class Candy
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Manufacturer { get; set; }
        public string Category { get; set; }
        public DateTime Date { get; set; }
    }
}
