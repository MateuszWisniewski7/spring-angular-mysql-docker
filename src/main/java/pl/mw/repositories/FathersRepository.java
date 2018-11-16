package pl.mw.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mw.domains.Father;

@Repository
public interface FathersRepository extends JpaRepository<Father, Integer> {
    Father findByFamilyId(int familyId);
}
