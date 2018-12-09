package it.unimib.disco.bigtwine.commons.messaging;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface EventProducerChannel {
    String CHANNEL = "messageChannel";

    @Output
    MessageChannel messageChannel();
}
