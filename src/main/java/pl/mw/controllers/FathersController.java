package pl.mw.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.mw.domains.Father;
import pl.mw.services.FathersService;

@RestController
@CrossOrigin
@RequestMapping("/fathers")
public class FathersController {

    @Autowired
    private FathersService fathersService;

    @PostMapping("addFatherToFamily")
    public void addFatherToFamily(@RequestBody Father father) {
        fathersService.addFather(father);
    }

    public Father readFather(@RequestParam int familyId) {
        return fathersService.getFather(familyId);
    }
}
