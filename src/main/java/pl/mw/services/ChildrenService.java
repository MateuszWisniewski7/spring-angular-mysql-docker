package pl.mw.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.mw.domains.Child;
import pl.mw.repositories.ChildrenRepository;

import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ChildrenService {

    @Autowired
    private ChildrenRepository childrenRepository;

    public void addChild(Child child) {
        childrenRepository.save(child);
    }

    public Set<Child> filterChildren(String firstName, String lastName, String pesel,
                                     Date birthDate, String sex) {
        Set<Child> filteredChildren = new HashSet<>();
        filteredChildren.addAll(childrenRepository.findByFirstNameStartingWithAndLastNameStartingWithAndPeselStartingWithAndSexStartingWith(firstName,
                                                                                                        lastName,
                                                                                                        pesel,
                                                                                                        sex));

        /*if(!(lastName==null)){
            filteredChildren.retainAll(childrenRepository.findByLastNameStartingWith(lastName));
        }
        if(!(pesel==null)){
            filteredChildren.retainAll(childrenRepository.findByPeselStartingWith(pesel));
        }*/

        if (!(birthDate == null)) {
            filteredChildren.retainAll(childrenRepository.findByBirthDate(birthDate));
        }
            /*
        if(!(sex==null)){
            filteredChildren.retainAll(childrenRepository.findBySexStartingWith(sex));
        }*/
        return filteredChildren;
    }

    public List<Child> getFamilyChildren(int familyId) {
        return childrenRepository.findByFamilyId(familyId);
    }
}
