export default {
  contactCoach(context, payload) {
    console.log('ok');

    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', newRequest);
  },
};
