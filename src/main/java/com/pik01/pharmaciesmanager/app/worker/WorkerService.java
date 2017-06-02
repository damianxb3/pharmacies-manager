package com.pik01.pharmaciesmanager.app.worker;

import com.pik01.pharmaciesmanager.app.worker.model.Worker;
import com.pik01.pharmaciesmanager.app.worker.model.dto.WorkerDto;

import java.util.List;

public interface WorkerService {
    List<Worker> getAll();
    Worker addWorker(WorkerDto worker);
    void deleteWorker(long id);
}
