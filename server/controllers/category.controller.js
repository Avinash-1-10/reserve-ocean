import Category from "../models/category.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res
      .status(200)
      .json(
        new ApiResponse(200, "Categories retrieved successfully.", categories)
      );
  } catch (error) {
    console.error("Error during categories retrieval: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while retrieving categories."
        )
      );
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, image } = req.body;
    if (!name || !image) {
      return res
        .status(400)
        .json(new ApiError(400, "Name and image are required."));
    }
    const newCategory = new Category({ name, image });
    await newCategory.save();
    return res
      .status(201)
      .json(
        new ApiResponse(201, "Category created successfully.", newCategory)
      );
  } catch (error) {
    console.error("Error during category creation: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while creating category."
        )
      );
  }
};

export { getCategories, createCategory };
