package com.pik01.pharmaciesmanager.app.medicine;


import com.pik01.pharmaciesmanager.app.medicine.model.MedicineItem;

import java.util.List;

public interface MedicineItemService {
    List<MedicineItem> getByPhar(long id);
}
