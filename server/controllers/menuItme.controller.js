import MenuItem from "../models/menuItem.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createMenuItem = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    console.log(category);
    if (!name || !description || !price || !image || !category) {
      return res
        .status(400)
        .json(
          new ApiError(
            400,
            "Name, description, price, category and image are required."
          )
        );
    }
    const newMenuItem = new MenuItem({
      name,
      description,
      price,
      image,
      category,
    });
    await newMenuItem.save();
    return res
      .status(201)
      .json(
        new ApiResponse(201, "Menu item created successfully.", newMenuItem)
      );
  } catch (error) {
    console.error("Error during menu item creation: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while creating menu item."
        )
      );
  }
};

const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find().populate("category");
    return res
      .status(200)
      .json(
        new ApiResponse(200, "Menu items retrieved successfully.", menuItems)
      );
  } catch (error) {
    console.error("Error during menu items retrieval: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while retrieving menu items."
        )
      );
  }
};

const getMenuItemsByCategory = async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ category: req.params.id }).populate(
      "category"
    );
    return res
      .status(200)
      .json(
        new ApiResponse(200, "Menu items retrieved successfully.", menuItems)
      );
  } catch (error) {
    console.error("Error during menu items retrieval: ", error);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          error.message || "An Error Occurred while retrieving menu items."
        )
      );
  }
};

export { createMenuItem, getMenuItems, getMenuItemsByCategory };
