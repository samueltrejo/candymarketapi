using System;
using System.Collections.Generic;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;

namespace CandyMarket.Api.Repositories
{
    public interface ICandyRepository
    {
        IEnumerable<Candy> GetAllCandy();
        Candy AddCandy(AddCandyDto newCandy);
        bool EatCandy(int candyIdToDelete);
    }
}