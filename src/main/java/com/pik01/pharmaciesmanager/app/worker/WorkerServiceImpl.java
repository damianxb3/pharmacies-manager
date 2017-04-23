package com.pik01.pharmaciesmanager.app.worker;

import com.pik01.pharmaciesmanager.app.worker.model.Worker;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerServiceImpl implements WorkerService {
    private WorkerRepository workerRepository;

    public WorkerServiceImpl(WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
    }

    @Override
    public List<Worker> getAll() {
        return workerRepository.findAll();
    }
}
