package com.pik01.pharmaciesmanager.app.worker;

import com.pik01.pharmaciesmanager.app.worker.model.Worker;
import com.pik01.pharmaciesmanager.app.worker.model.WorkerRole;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/api/worker")
public class WorkerController {
    private WorkerService workerService;

    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;
    }

    @GetMapping
    public List<Worker> getAll() {
        return workerService.getAll();
    }

    @GetMapping("/add/roles")
    public List<String> getRoles() {
        List<String> rolesNames = Stream.of(WorkerRole.values())
                .map(WorkerRole::name)
                .collect(Collectors.toList());
        return rolesNames;
    }

    @PostMapping("/add")
    public Worker addMed(@RequestBody Worker worker) {
        System.out.println(worker.getFirstName());
        return workerService.addWorker(worker);
    }

}
