import * as yup from "yup";

export default function validator() {
  return yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    services: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.string().required(),
          title: yup.string().required(),
        })
      )
      .min(1, "You must select atleast one service."),
  });
}
