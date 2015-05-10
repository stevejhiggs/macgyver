export default function (context, payload, done) {
    //put the event on the dispatcher
    context.dispatch('INCREMENT_COUNT', {incValue: payload});
    done();
};