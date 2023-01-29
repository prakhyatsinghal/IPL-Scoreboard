package com.ipl.scoreboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.ipl.scoreboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    
}
