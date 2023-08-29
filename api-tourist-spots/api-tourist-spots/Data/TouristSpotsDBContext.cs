using api_tourist_spots.Data.Map;
using api_tourist_spots.Models;
using Microsoft.EntityFrameworkCore;

namespace api_tourist_spots.Data
{
    public class TouristSpotsDBContext : DbContext
    {
        public TouristSpotsDBContext(DbContextOptions<TouristSpotsDBContext> options) : base(options) { 
        }

        public DbSet<TouristSpotModel> TouristSpots { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TouristSpotMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}
