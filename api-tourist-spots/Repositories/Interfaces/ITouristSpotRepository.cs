using api_tourist_spots.Models;

namespace api_tourist_spots.Repositories.Interfaces
{
    public interface ITouristSpotRepository
    {
        Task<List<TouristSpotModel>> GetTouristSpots();
        Task<TouristSpotModel> GetTouristSpot(int id);
        Task<TouristSpotModel> AddTouristSpot(TouristSpotModel touristSpot);
        Task<TouristSpotModel> UpdateTouristSpot(TouristSpotModel touristSpot, int id);
        Task<bool> DeleteTouristSpot(int id);


    }
}
