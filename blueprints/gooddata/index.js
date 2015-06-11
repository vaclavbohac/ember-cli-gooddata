module.exports = {
    normalizeEntityName: function() {},

    afterInstall: function() {
        return this.addBowerPackageToProject('gooddata/bower-gooddata-js', '0.1.17');
    }
};
