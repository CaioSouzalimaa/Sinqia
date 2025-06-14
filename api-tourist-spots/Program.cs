using api_tourist_spots.Data;
using api_tourist_spots.Repositories;
using api_tourist_spots.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api_tourist_spots
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddEntityFrameworkSqlServer()
                .AddDbContext<TouristSpotsDBContext>(
                    options => options.UseSqlServer(builder.Configuration.GetConnectionString("DataBase"))
                );

            builder.Services.AddScoped<ITouristSpotRepository, TouristSpotRepository>();

            var app = builder.Build();

            // Create the database and apply migrations automatically
            using (var scope = app.Services.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<TouristSpotsDBContext>();
                dbContext.Database.EnsureCreated(); // Ensures the database is created automatically
            }

            // CORS
            #region [Cors]
            builder.Services.AddCors();
            #endregion

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            #region [Cors]
            app.UseCors(c =>
            {
                c.AllowAnyHeader();
                c.AllowAnyMethod();
                c.AllowAnyOrigin();
            });
            #endregion

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}
