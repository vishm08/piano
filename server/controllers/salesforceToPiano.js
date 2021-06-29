let exportedMethods = {

    async postObject (info) {

        let newSObject = {
            sobject : info.sobject,
            idPrefix : info.idPrefix,
            cfPrefix : info.cfPrefix,
            fields : fields,
            linkedObject : info.linkedObject
        };

        return newSObject;
    },

    async fields (fields) {
        let newField = {
            name : fields.name,
            type : fields.type,
            pnamme : 'SFC' + fields.name
        }

        return newField
    }
};

module.exports = exportedMethods;