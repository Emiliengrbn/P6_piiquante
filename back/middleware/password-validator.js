const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8) // Minimum 8 caractère
  .is()
  .max(100) // Maximum 100 caractère
  .has()
  .uppercase() // Mettre des majuscules
  .has()
  .lowercase() // Mettre des minuscule
  .has()
  .digits(2) // Mettre 2 chiffres
  .has()
  .not()
  .spaces() // Ne pas voir d'espace
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123", "Azerty123"]); // Ces mdp sont bannis

module.exports = (req, res, next) => {
  if (passwordSchema.validate(req.body.password)) {
    next();
  } else {
    return res.status(400).json({
      error: `Le mot de passe n'est pas assez fort${passwordSchema.validate(
        "req.body.password",
        { list: true }
      )}`,
    });
  }
};
