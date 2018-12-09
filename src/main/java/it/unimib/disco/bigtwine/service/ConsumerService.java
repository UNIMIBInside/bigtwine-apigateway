package it.unimib.disco.bigtwine.service;

import it.unimib.disco.bigtwine.commons.messaging.Event;
import it.unimib.disco.bigtwine.commons.messaging.EventConsumerChannel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.stereotype.Service;

@Service
public class ConsumerService {
    private final Logger log = LoggerFactory.getLogger(ConsumerService.class);


    @StreamListener(EventConsumerChannel.CHANNEL)
    public void consume(Event e) {
        log.info("Received message: {}.", e.getMessage());
    }
}
