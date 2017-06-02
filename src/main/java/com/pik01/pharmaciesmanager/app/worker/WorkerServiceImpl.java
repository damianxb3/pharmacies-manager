package com.pik01.pharmaciesmanager.app.worker;

import com.pik01.pharmaciesmanager.app.pharmacy.PharmacyService;
import com.pik01.pharmaciesmanager.app.pharmacy.model.Pharmacy;
import com.pik01.pharmaciesmanager.app.worker.model.Worker;
import com.pik01.pharmaciesmanager.app.worker.model.dto.WorkerDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerServiceImpl implements WorkerService {
    private WorkerRepository workerRepository;
    private PharmacyService pharmacyService;

    public WorkerServiceImpl(WorkerRepository workerRepository, PharmacyService pharmacyService) {
        this.workerRepository = workerRepository;
        this.pharmacyService = pharmacyService;
    }

    @Override
    public List<Worker> getAll() {
        return workerRepository.findAll();
    }

    @Override
    public Worker addWorker(WorkerDto worker) {
        Pharmacy pharmacy = pharmacyService.getPharmacy(worker.getWorkplaceId());
        return workerRepository.save(new Worker(worker.getFirstName(), worker.getLastName(),
                worker.getRole(), pharmacy));
    }

    @Override
    public void deleteWorker(long id) {
        workerRepository.delete(id);
    }
}
