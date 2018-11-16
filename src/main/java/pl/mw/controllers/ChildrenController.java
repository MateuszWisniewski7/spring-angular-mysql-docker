package pl.mw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.mw.domains.Child;
import pl.mw.services.ChildrenService;

import java.sql.Date;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
@RequestMapping("/children")
public class ChildrenController {

    @Autowired
    private ChildrenService childrenService;

    @PostMapping("addChildToFamily")
    public void addChildToFamily(@RequestBody Child child) {
        childrenService.addChild(child);
    }

    @GetMapping("searchChild")
    public Set<Child> searchChild(
            @RequestParam(name = "firstName", required = false, defaultValue = "") String firstName,
            @RequestParam(name = "lastName", required = false, defaultValue = "") String lastName,
            @RequestParam(name = "pesel", required = false, defaultValue = "") String pesel,
            @RequestParam(name = "birthDate", required = false) String birthDate,
            @RequestParam(name = "sex", required = false, defaultValue = "") String sex) {

        if (firstName.equals("undefined")){firstName="";}
        if (lastName.equals("undefined")){lastName="";}
        if (pesel.equals("undefined")){pesel="";}
        if (sex.equals("undefined")){sex="";}
        Date birthDateConverted=null;
        if (!(birthDate.isEmpty()) && !(birthDate.equals("undefined")) && !(birthDate==null)) {
            birthDateConverted = Date.valueOf(birthDate);
        }
        return childrenService.filterChildren(firstName,
                                              lastName,
                                              pesel,
                                              birthDateConverted,
                                              sex);
    }

    public List<Child> readChildren(@RequestParam(name = "familyId") int familyId) {
        return childrenService.getFamilyChildren(familyId);
    }
}
