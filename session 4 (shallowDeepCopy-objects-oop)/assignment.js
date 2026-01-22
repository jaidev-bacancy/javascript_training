const registry = {
    active: [{ id: 1, name: "Alpha" }],
    archived: []
};

function cloneAndModify(data) {
    // Goal: Create a copy so the original registry isn't changed
    
    /*
    Memory state in case of shallow copy :
    New reference of 'data' and its top level properties is created.
    But the reference remains the same for the array of 'active' property.
    Hence the array of 'active' is mutated when changes are made in 'copy'.
    */
    //   const copy = { ...data };  // This creates a shallow copy

    /*
    Memory state in case of deep copy :
    New reference is created of the 'data' object, also new references are made for every property and its value whether it be
        nested or not.
    Hence changes made in 'copy' are not reflected in the original 'data' object.
    */
    const copy = structuredClone(data);

    copy.active.push({ id: 2, name: "Beta" });
    copy.active[0].name = "Gamma";
    copy.version = 2.0;

    return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // Shallow copy : 2 ---- Deep copy : 1 
console.log(registry.active[0].name); // Shallow copy : Gamma ---- Deep copy : Alpha
console.log(registry.version);       // Shallow and Deep copy : undefined
