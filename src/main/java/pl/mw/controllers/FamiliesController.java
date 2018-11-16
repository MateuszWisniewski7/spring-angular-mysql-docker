package pl.mw.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.mw.domains.Family;
import pl.mw.services.FamiliesService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/families")
public class FamiliesController {

    @Autowired
    private FamiliesService familiesService;

    @Autowired
    private FathersController fathersController;

    @Autowired
    private ChildrenController childrenController;

    @PostMapping("createFamily")
    public Family createFamily() {
        familiesService.create();
        return familiesService.lastFamily();
    }

    @GetMapping("readFamily")
    public List<Object> readFamily(@RequestParam int familyId) {
        List<Object> familyMembers = new ArrayList<Object>(childrenController.readChildren(familyId));
        familyMembers.add(fathersController.readFather(familyId));
        return familyMembers;
    }


}
