using api_tourist_spots.Data;
using api_tourist_spots.Models;
using api_tourist_spots.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace api_tourist_spots.Repositories
{
    public class TouristSpotRepository : ITouristSpotRepository
    {
        private readonly TouristSpotsDBContext _dbContext;
        public TouristSpotRepository(TouristSpotsDBContext touristSpotsDBContext)
        {
            _dbContext = touristSpotsDBContext;
        }

        public async Task<TouristSpotModel> GetTouristSpot(int id)
        {
            return await _dbContext.TouristSpots.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<TouristSpotModel>> GetTouristSpots()
        {
            return await _dbContext.TouristSpots.ToListAsync();
        }

        public async Task<TouristSpotModel> AddTouristSpot(TouristSpotModel touristSpot)
        {
            await _dbContext.TouristSpots.AddAsync(touristSpot);
            await _dbContext.SaveChangesAsync();

            return touristSpot;
        }
        public async Task<TouristSpotModel> UpdateTouristSpot(TouristSpotModel touristSpot, int id)
        {
            TouristSpotModel getTouristSpot = await GetTouristSpot(id);

            if(getTouristSpot == null)
            {
                throw new Exception($"Usuario para o ID: {id} não foi encontrado no banco de dados.");
            }

            getTouristSpot.Name = touristSpot.Name;
            getTouristSpot.Description = touristSpot.Description;
            getTouristSpot.State = touristSpot.State;
            getTouristSpot.City = touristSpot.City;
            getTouristSpot.Location = touristSpot.Location;
            getTouristSpot.CreatedAt = touristSpot.CreatedAt;

            _dbContext.TouristSpots.Update(getTouristSpot);
            await _dbContext.SaveChangesAsync();

            return getTouristSpot;
        }
        public async Task<bool> DeleteTouristSpot(int id)
        {
            TouristSpotModel getTouristSpot = await GetTouristSpot(id);

            if (getTouristSpot == null)
            {
                throw new Exception($"Usuario para o ID: {id} não foi encontrado no banco de dados.");
            }

            _dbContext.TouristSpots.Remove(getTouristSpot);
            await _dbContext.SaveChangesAsync();
            return true;
        }        
    }
}