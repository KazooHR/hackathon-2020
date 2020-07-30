import React, { useState } from "react";
import { Card, Button, Header, Text, Flex, Spacer, TextArea } from "@kazoohr/confetti";
import { Rating } from "@material-ui/lab";

export interface PopUpFeedbackProps {
    action: string;
    subject: string;
    question: string;
    value: string;
    comment?: string;
    rating: number;
    snoozeCount: number;
}

export function PopUpFeedback({feedback}: {feedback: PopUpFeedbackProps}) {
    const [commentOpen, setCommentOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState<number>(2.5);

    return (
        <Card
            barBrandingClass=""
            barColor=""
            barLocation="top"
            className=""
            withBorder
        >
            <Header level="3" size="small">{feedback.action}</Header>
            <Header level="1" size="medium" thick>{feedback.subject}</Header>
            <Text>{feedback.question}{" "}<b>{feedback.value}</b>{"?"}</Text>
            <Flex>
                <Rating style={{fontSize: "64px", color: "#2A5CDB"}} name="half-rating" defaultValue={rating} precision={0.5} size="large"
                        onChangeActive={(event: object, value: number) => setRating(value)} />
            </Flex>
            {!commentOpen &&
            <Button onClick={() => setCommentOpen(true)}>
                Add a comment (optional)
            </Button>}
            {commentOpen && <TextArea
                error=""
                maxLength={-1}
                minRows={-1}
                onMention={null}
                optionalLabelText="(optional)"
                placeholder={`let ${feedback.subject} know why you chose this rating`}
                speechBubble={false}
                value={comment}
                onChange={(comment: string) => setComment(comment)}
            />}
            <Spacer size="medium" orientation="horizontal" />
            <Text>{"Your feedback is shared with Neha anonymously."}</Text>
            <Spacer size="medium" orientation="horizontal" />

            <Button onClick={null}>
                Submit Feedback
            </Button>
            <Button onClick={null}>
                Remind me later
            </Button>
        </Card>
            )
}
