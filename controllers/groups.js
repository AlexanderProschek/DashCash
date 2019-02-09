module.exports = {
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body;

        // Check if the user has the same email
        const foundUser = await User.findOne({ email });
        if(foundUser) {
            return res.status(403).json({ error: "Email already in use" });
        }

        // Save new

    },
    logIn: async (req, res, next) => {

    },
    secret: async (req, res, next) => {
        
    }
};