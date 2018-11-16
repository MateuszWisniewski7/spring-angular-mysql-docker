package pl.mw.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.mw.domains.Father;
import pl.mw.repositories.FathersRepository;

@Service
public class FathersService {

    @Autowired
    private FathersRepository fathersRepository;

    public void addFather(Father father){
        fathersRepository.save(father);
    }

    public Father getFather(int familyId){return fathersRepository.findByFamilyId(familyId);}
}
