package pl.mw.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.mw.domains.Family;
import pl.mw.repositories.FamiliesRepository;

@Service
public class FamiliesService {

    @Autowired
    private FamiliesRepository familiesRepository;

    public void create(){
        familiesRepository.save(new Family());
    }

    public Family lastFamily(){
        return familiesRepository.findFirstByOrderByIdDesc();
    }
}
