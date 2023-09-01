using api_tourist_spots.Models;
using api_tourist_spots.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api_tourist_spots.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TouristSpotController : ControllerBase
    {
        private readonly ITouristSpotRepository _touristSoptRepository;

        public TouristSpotController(ITouristSpotRepository touristSoptRepository)
        {
            _touristSoptRepository = touristSoptRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<TouristSpotModel>>> GetTouristSpots()
        {
            List<TouristSpotModel> touristSpots = await _touristSoptRepository.GetTouristSpots();
            return Ok(touristSpots);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TouristSpotModel>> GetTouristSpot(int id)
        {
            TouristSpotModel touristSpot = await _touristSoptRepository.GetTouristSpot(id);
            return Ok(touristSpot);
        }

        [HttpPost]
        public async Task<ActionResult<TouristSpotModel>> AddTouristSpot([FromBody]  TouristSpotModel touristSpotModel)
        {
            TouristSpotModel touristSpot = await _touristSoptRepository.AddTouristSpot(touristSpotModel);
            return Ok(touristSpot);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TouristSpotModel>> UpdateTouristSpot([FromBody] TouristSpotModel touristSpotModel, int id)
        {
            touristSpotModel.Id = id;
            TouristSpotModel touristSpot = await _touristSoptRepository.UpdateTouristSpot(touristSpotModel, id);
            return Ok(touristSpot);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<TouristSpotModel>> DeleteTouristSpot(int id)
        {
            bool deleted = await _touristSoptRepository.DeleteTouristSpot(id);
            return Ok(deleted);
        }
    }
}
