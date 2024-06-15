import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from " mongooseAggregatePaginate";

const videoSchema = new Schema(
  {
    videoFiles: {
      type: String,
      required: true,
    },
    thumnail: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      required: true,
    },
    descripation: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owener: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
