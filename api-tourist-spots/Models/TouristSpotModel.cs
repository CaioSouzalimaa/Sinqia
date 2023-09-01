namespace api_tourist_spots.Models
{
    public class TouristSpotModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string? Location { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
