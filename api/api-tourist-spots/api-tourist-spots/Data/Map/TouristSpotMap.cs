using api_tourist_spots.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api_tourist_spots.Data.Map
{
    public class TouristSpotMap : IEntityTypeConfiguration<TouristSpotModel>
    {
        public void Configure(EntityTypeBuilder<TouristSpotModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Description).IsRequired().HasMaxLength(100);
            builder.Property(x => x.State).IsRequired().HasMaxLength(2);
            builder.Property(x => x.City).IsRequired();
            builder.Property(x => x.Location);
            builder.Property(x => x.CreatedAt).IsRequired();
        }
    }
}
