package org.atmosphere.tictactoe;

import org.atmosphere.cpr.AtmosphereResource;
import org.atmosphere.cpr.PerRequestBroadcastFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PersonalPerRequestBroadcastFilter implements PerRequestBroadcastFilter {

    private static final Logger logger = LoggerFactory.getLogger(PersonalPerRequestBroadcastFilter.class);

    @Override
    public BroadcastAction filter(AtmosphereResource atmosphereResource, Object originalMessage, Object message) {
        logger.info("PersonalPerRequestBroadcastFilter.filter(AtmosphereResource atmosphereResource, Object originalMessage, Object message)");
        return new BroadcastAction(message);
    }

    @Override
    public BroadcastAction filter(Object originalMessage, Object message) {
        logger.info("PersonalPerRequestBroadcastFilter.filter(Object originalMessage, Object message)");
        return new BroadcastAction(message);
    }
}
