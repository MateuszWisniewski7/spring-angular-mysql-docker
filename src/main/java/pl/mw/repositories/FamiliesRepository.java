package pl.mw.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mw.domains.Family;

@Repository
public interface FamiliesRepository extends JpaRepository<Family, Integer> {
    Family findFirstByOrderByIdDesc();
}
