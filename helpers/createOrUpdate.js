const createOrUpdate = async (model, values, condition) => {
  const obj = await model.findOne({ where: condition });
  if (obj) {
    return obj.update(values);
  }
  return model.create(values);
};

module.exports = createOrUpdate;
