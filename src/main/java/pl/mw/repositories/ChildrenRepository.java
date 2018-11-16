package pl.mw.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mw.domains.Child;

import java.sql.Date;
import java.util.List;

@Repository
public interface ChildrenRepository extends JpaRepository<Child, Integer> {

/*
    check if faster for one grouped query

    List<Child> findByFirstNameStartingWith(String firstName);

    List<Child> findByLastNameStartingWith(String lastName);

    List<Child> findByPeselStartingWith(String pesel);

    List<Child> findBySexStartingWith(String sex);
*/

    List<Child> findByFirstNameStartingWithAndLastNameStartingWithAndPeselStartingWithAndSexStartingWith(
            String firstName,
            String lastName,
            String pesel,
            String sex);

    List<Child> findByBirthDate(Date birthDate);

    List<Child> findByFamilyId(int familyId);
}
