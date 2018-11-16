package pl.mw.domains;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Father {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private int id;

    @Column(name="BirthDate")
    private Date birthDate;

    @Column(name="FirstName")
    private String firstName;

    @Column(name="PESEL")
    private String pesel;

    @Column(name="LastName")
    private String lastName;

    @OneToOne
    private Family family;

    public Father() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPesel() {
        return pesel;
    }

    public void setPesel(String pesel) {
        this.pesel = pesel;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

//    public int getFamilyId() {
//        return familyId;
//    }
//
//    public void setFamilyId(int familyId) {
//        this.familyId = familyId;
//    }

    public Family getFamily() {
        return family;
    }

    public void setFamily(Family family) {
        this.family = family;
    }
}
