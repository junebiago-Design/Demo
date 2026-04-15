// recordManager.js – Stores and retrieves quotation form data in localStorage
// Uses auto‑increment numeric IDs (starting from 1)

const STORAGE_KEY = 'quotation_records';
const NEXT_ID_KEY = 'nextRecordId';

// Helper to get next available ID
function getNextId() {
    let nextId = localStorage.getItem(NEXT_ID_KEY);
    if (!nextId) {
        nextId = 1;
    } else {
        nextId = parseInt(nextId, 10);
    }
    localStorage.setItem(NEXT_ID_KEY, nextId + 1);
    return nextId;
}

// Get all stored records
function getStoredRecords() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    try {
        return JSON.parse(stored);
    } catch(e) {
        return [];
    }
}

// Save a new record (auto‑increment ID)
function saveFormRecord(formData) {
    let records = getStoredRecords();
    const timestamp = new Date().toISOString();
    const newId = getNextId();
    const record = {
        id: newId,
        timestamp: timestamp,
        clientName: formData.clientName,
        clientEmail: formData.clientEmail,
        clientPhone: formData.clientPhone,
        service: formData.service,
        scopeOfWork: formData.scopeOfWork,
        additionalScope: formData.additionalScope,
        items: formData.items,
        discount: formData.discount,
        paymentMethods: formData.paymentMethods,
        quoteNotes: formData.quoteNotes,
        label: `${formData.clientName} - ${formData.service} (${new Date(timestamp).toLocaleString()})`
    };
    records.unshift(record); // newest first
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    return record;
}

// Update an existing record (preserves original ID)
function updateFormRecord(recordId, formData) {
    let records = getStoredRecords();
    const index = records.findIndex(r => r.id === recordId);
    if (index === -1) return null;
    const timestamp = new Date().toISOString();
    const updatedRecord = {
        id: recordId,
        timestamp: timestamp,
        clientName: formData.clientName,
        clientEmail: formData.clientEmail,
        clientPhone: formData.clientPhone,
        service: formData.service,
        scopeOfWork: formData.scopeOfWork,
        additionalScope: formData.additionalScope,
        items: formData.items,
        discount: formData.discount,
        paymentMethods: formData.paymentMethods,
        quoteNotes: formData.quoteNotes,
        label: `${formData.clientName} - ${formData.service} (${new Date(timestamp).toLocaleString()})`
    };
    records[index] = updatedRecord;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    return updatedRecord;
}

// Delete a record by id
function deleteFormRecord(id) {
    let records = getStoredRecords();
    records = records.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

// Get a single record by id
function getRecordById(id) {
    const records = getStoredRecords();
    return records.find(r => r.id === id);
}

// Export for use in HTML (global)
window.saveFormRecord = saveFormRecord;
window.updateFormRecord = updateFormRecord;
window.getStoredRecords = getStoredRecords;
window.deleteFormRecord = deleteFormRecord;
window.getRecordById = getRecordById;